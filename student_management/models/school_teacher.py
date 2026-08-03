from odoo import api,fields,models

class SchoolTeacher(models.Model):
    _name = 'school.teacher'
    _description = 'Shcool Teacher'

    name = fields.Char(string='Teacher Name')
    employee_id = fields.Char(string='Employee ID')
    phone = fields.Char(string='Phone')
    email = fields.Char(string='Email')
    date_joined = fields.Date(string='Date joined')

    # Relation
    subject_id = fields.Many2one('school.subject',string='Subject')
    active = fields.Boolean(string='Active',default=True)
