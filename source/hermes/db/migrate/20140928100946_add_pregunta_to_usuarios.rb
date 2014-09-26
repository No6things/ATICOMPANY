class AddPreguntaToUsuarios < ActiveRecord::Migration
  def change
  	add_column :usuarios, :pregunta, :string
  end
end
