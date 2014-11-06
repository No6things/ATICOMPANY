class AddProfundidadToPaquete < ActiveRecord::Migration
  def change
	add_column :paquetes, :profundidad, :float
  end
end
