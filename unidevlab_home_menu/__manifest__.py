{
    "name": "Community Home Menu",
    "summary": "Clean-room app launcher for Odoo Community",
    "version": "19.0.1.1.0",
    "author": "Unidevlab",
    "website": "https://unidevlab.com",
    "category": "Productivity",
    "license": "LGPL-3",
    "depends": ["web"],
    "data": [
        "views/unidevlab_home_menu_actions.xml",
    ],
    "images": ["static/description/banner.png"],
    "assets": {
        "web.assets_backend": [
            "unidevlab_home_menu/static/src/home_menu/unidevlab_home_menu.js",
            "unidevlab_home_menu/static/src/home_menu/unidevlab_home_menu.xml",
            "unidevlab_home_menu/static/src/home_menu/unidevlab_home_menu.scss",
        ],
    },
    "installable": True,
    "application": False,
}
