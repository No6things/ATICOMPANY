class AddEmisorIdToPaquete < ActiveRecord::Migration
  def change
    add_column :paquetes, :emisor_id, :integer
  end
end
