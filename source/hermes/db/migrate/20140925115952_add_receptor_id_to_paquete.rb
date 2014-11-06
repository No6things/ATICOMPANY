class AddReceptorIdToPaquete < ActiveRecord::Migration
  def change
    add_column :paquetes, :receptor_id, :integer
  end
end
