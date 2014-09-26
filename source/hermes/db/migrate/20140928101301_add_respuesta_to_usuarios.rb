class AddRespuestaToUsuarios < ActiveRecord::Migration
  def change
  	add_column :usuarios, :respuesta, :string
  end
end
