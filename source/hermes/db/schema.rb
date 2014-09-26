# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140927205022) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agencia", force: true do |t|
    t.string   "nombre"
    t.text     "ubicacion"
    t.float    "latitud"
    t.float    "longitud"
    t.integer  "empresa_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "agencia", ["nombre"], name: "index_agencia_on_nombre", using: :btree

  create_table "agencia_paquetes", force: true do |t|
    t.datetime "fecha_arribo"
    t.integer  "agencia_id"
    t.integer  "paquete_id"
    t.integer  "tipo_estado_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "agencia_paquetes", ["fecha_arribo"], name: "index_agencia_paquetes_on_fecha_arribo", using: :btree

  create_table "empresas", force: true do |t|
    t.string   "nombre"
    t.string   "rif"
    t.string   "frase_comercial"
    t.float    "constante_tarifa"
    t.float    "porcentaje_tarifa"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "empresas", ["nombre"], name: "index_empresas_on_nombre", using: :btree
  add_index "empresas", ["rif"], name: "index_empresas_on_rif", using: :btree

  create_table "paquetes", force: true do |t|
    t.float    "ancho"
    t.float    "alto"
    t.float    "peso"
    t.text     "descripcion"
    t.string   "numero_guia"
    t.float    "costo"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "emisor_id"
    t.integer  "receptor_id"
    t.float    "profundidad"
  end

  add_index "paquetes", ["costo"], name: "index_paquetes_on_costo", using: :btree
  add_index "paquetes", ["numero_guia"], name: "index_paquetes_on_numero_guia", using: :btree

  create_table "tipo_estados", force: true do |t|
    t.string   "nombre"
    t.string   "abreviacion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tipo_estados", ["abreviacion"], name: "index_tipo_estados_on_abreviacion", using: :btree

  create_table "tipo_usuarios", force: true do |t|
    t.string   "nombre"
    t.string   "abreviacion"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tipo_usuarios", ["abreviacion"], name: "index_tipo_usuarios_on_abreviacion", using: :btree

  create_table "usuario_empresas", force: true do |t|
    t.integer  "usuario_id"
    t.integer  "empresa_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "usuario_interno_agencia", force: true do |t|
    t.integer  "usuario_id"
    t.integer  "agencia_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "usuarios", force: true do |t|
    t.string   "nombre"
    t.string   "apellido"
    t.string   "correo_electronico"
    t.datetime "fecha_ultimo_acceso"
    t.integer  "tipo_usuario_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
  end

  add_index "usuarios", ["apellido"], name: "index_usuarios_on_apellido", using: :btree
  add_index "usuarios", ["correo_electronico"], name: "index_usuarios_on_correo_electronico", using: :btree
  add_index "usuarios", ["fecha_ultimo_acceso"], name: "index_usuarios_on_fecha_ultimo_acceso", using: :btree
  add_index "usuarios", ["nombre"], name: "index_usuarios_on_nombre", using: :btree

end
