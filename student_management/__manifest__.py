{
    'name':'Student Managemnet',
    'version':'19.0.1.0.0',
    # 'summary':'#',
    # 'description':'#',
    # 'category':'#',
    'auhtor':'Pyae Sone',
    'license': 'LGPL-3',
    'auto_install':False,
    'application':True,
    'installable':True,
    'depends':['base'],
    'data':[
        'security/ir.model.access.csv',
        'views/student_views.xml',
        'views/student_menu.xml',
    ],
    'sequence':1,
}