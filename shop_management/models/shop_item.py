from odoo import api,models,fields


class ShopItem(models.Model):
    _name = 'shop.item'
    _description = 'Shop Item'

    name = fields.Char(string='Shop Item')
    number = fields.Integer(string='Number')
    quantity = fields.Float(string='Quantity')
    is_available = fields.Boolean(string='Available',default=True)
    date = fields.Date(string='Date')