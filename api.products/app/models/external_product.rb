class ExternalProduct < ActiveRecord::Base
  establish_connection :development
  self.table_name = "Product"
end