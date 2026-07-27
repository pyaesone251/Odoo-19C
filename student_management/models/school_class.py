from odoo import api,fields,models

class SchoolClass(models.Model):
    name = "school.class"
    _description = 'School Class'

    name = fields.Char(string='Class Name')
    code = fields.Char(string='Code')
    academic_year = fields.Char(string='Academic Year')
    description = fields.Text(string='Description')
    active = fields.Boolean(string='Active',default=True)
