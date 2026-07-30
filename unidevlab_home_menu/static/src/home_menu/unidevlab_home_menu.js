/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { standardActionServiceProps } from "@web/webclient/actions/action_service";
import { computeAppsAndMenuItems } from "@web/webclient/menus/menu_helpers";

import { Component, onMounted, useRef, useState } from "@odoo/owl";

function normalizeSearch(value) {
    return (value || "").toString().trim().toLowerCase();
}

function itemMatches(item, query) {
    if (!query) {
        return true;
    }
    return `${item.label || ""} ${item.parents || ""}`.toLowerCase().includes(query);
}

function normalizeIconData(iconData) {
    if (!iconData || iconData.startsWith("data:image")) {
        return iconData;
    }
    const prefix = iconData.startsWith("P") ? "data:image/svg+xml;base64," : "data:image/png;base64,";
    return prefix + iconData.replace(/\s/g, "");
}

function isCommunityHomeMenu(item) {
    return item.xmlid === "unidevlab_home_menu.menu_unidevlab_home_menu";
}

export class CommunityHomeMenu extends Component {
    static template = "unidevlab_home_menu.HomeMenu";
    static props = { ...standardActionServiceProps };

    setup() {
        this.menu = useService("menu");
        this.searchInput = useRef("searchInput");
        this.state = useState({
            query: "",
            activeIndex: 0,
        });
        // Build the menu tree once when the launcher opens (it is static for the
        // lifetime of this client action) instead of rebuilding it on every render.
        const menuData = computeAppsAndMenuItems(this.menu.getMenuAsTree("root"));
        this.allApps = menuData.apps
            .filter((app) => !isCommunityHomeMenu(app))
            .map((app) => ({ ...app, webIconData: normalizeIconData(app.webIconData) }));
        this.allMenuItems = menuData.menuItems.filter((item) => !isCommunityHomeMenu(item));
        onMounted(() => {
            this.searchInput.el?.focus();
        });
    }

    get query() {
        return normalizeSearch(this.state.query);
    }

    get visibleApps() {
        return this.allApps.filter((app) => itemMatches(app, this.query));
    }

    get visibleMenuItems() {
        if (!this.query) {
            return [];
        }
        return this.allMenuItems.filter((item) => itemMatches(item, this.query)).slice(0, 12);
    }

    get visibleItems() {
        return [...this.visibleApps, ...this.visibleMenuItems];
    }

    get activeId() {
        return this.visibleItems[this.state.activeIndex]?.id;
    }

    get hasResults() {
        return this.visibleItems.length > 0;
    }

    get searchPlaceholder() {
        return _t("Search apps and menus");
    }

    get emptyLabel() {
        return _t("No matching apps or menus");
    }

    onSearchInput(ev) {
        this.state.query = ev.target.value;
        this.state.activeIndex = 0;
    }

    onKeydown(ev) {
        if (!this.hasResults) {
            return;
        }
        if (ev.key === "ArrowDown") {
            ev.preventDefault();
            this.state.activeIndex = (this.state.activeIndex + 1) % this.visibleItems.length;
        } else if (ev.key === "ArrowUp") {
            ev.preventDefault();
            this.state.activeIndex =
                (this.state.activeIndex - 1 + this.visibleItems.length) % this.visibleItems.length;
        } else if (ev.key === "Enter") {
            ev.preventDefault();
            this.openMenu(this.visibleItems[this.state.activeIndex]);
        }
    }

    async openMenu(menuItem) {
        if (!menuItem) {
            return;
        }
        await this.menu.selectMenu(menuItem);
    }
}

registry.category("actions").add("unidevlab_home_menu.action", CommunityHomeMenu);
