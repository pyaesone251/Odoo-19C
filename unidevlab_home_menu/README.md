# Community Home Menu

Clean-room Odoo Community addon that adds a full-page app launcher client action for Odoo 18 and 19.

This module uses Community webclient APIs only:

- `@web/webclient/menus/menu_helpers`
- the `menu` service
- the `actions` registry

It does not import `web_enterprise`, does not include Enterprise subscription files, and does not call `publisher_warranty.contract`.

## Install

Add the parent directory of `unidevlab_home_menu` to `addons_path`, update the app list, then install **Community Home Menu**.

Example:

```bash
./odoo-bin -d test_db --addons-path=/path/to/odoo/addons,/path/to/custom/addons -u unidevlab_home_menu
```

After installation, open the **Home** app/menu. The screen lists installed applications and lets users search application menus.
