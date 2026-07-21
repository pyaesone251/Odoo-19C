from odoo import api,fields,models

class SchoolStudent(models.Model):
    _name = 'school.student'
    _description = 'School Student'

    name = fields.Char(string='Student Name',required=True)
    student_id = fields.Char(string='Student Id')
    gender = fields.Selection([
        ('male','Male'),
        ('female','Female'),
        ('other','Other')
    ],string='Gender',default='male')
    date_of_birth = fields.Date(string='Date Of Birth')
    phone_number = fields.Char(string='Phone Number')
    email_address = fields.Char(string='Email Address')
    address = fields.Text(string='Address')
    active = fields.Boolean(string='Active',default=True)