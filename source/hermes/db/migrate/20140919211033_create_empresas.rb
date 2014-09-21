class CreateEmpresas < ActiveRecord::Migration
  def change
    create_table :empresas do |t|
      t.string :nombre
      t.string :rif
      t.string :frase_comercial
      t.float :constante_tarifa
      t.float :porcentaje_tarifa

      t.timestamps
    end
  end
end
