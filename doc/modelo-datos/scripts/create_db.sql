
\c <DBNAME>

CREATE SEQUENCE <SCHEMA>.paquete_id_seq;

CREATE TABLE <SCHEMA>.paquete (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.paquete_id_seq'),
                ancho REAL NOT NULL,
                alto REAL NOT NULL,
                peso REAL NOT NULL,
                descripcion TEXT NOT NULL,
                numero_guia VARCHAR NOT NULL,
                costo REAL NOT NULL,
                CONSTRAINT paquete_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE <SCHEMA>.paquete_id_seq OWNED BY <SCHEMA>.paquete.id;

CREATE UNIQUE INDEX numero_guia_paquete_idx
 ON <SCHEMA>.paquete
 ( numero_guia );

CREATE SEQUENCE <SCHEMA>.tipo_estado_id_seq;

CREATE TABLE <SCHEMA>.tipo_estado (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.tipo_estado_id_seq'),
                nombre VARCHAR NOT NULL,
                abreviacion VARCHAR NOT NULL,
                CONSTRAINT tipo_estado_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE <SCHEMA>.tipo_estado_id_seq OWNED BY <SCHEMA>.tipo_estado.id;

CREATE SEQUENCE <SCHEMA>.tipo_usuario_id_seq;

CREATE TABLE <SCHEMA>.tipo_usuario (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.tipo_usuario_id_seq'),
                nombre VARCHAR NOT NULL,
                abreviacion VARCHAR NOT NULL,
                CONSTRAINT tipo_usuario_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE <SCHEMA>.tipo_usuario_id_seq OWNED BY <SCHEMA>.tipo_usuario.id;

CREATE UNIQUE INDEX abreviacion_tipo_usuario_idx
 ON <SCHEMA>.tipo_usuario
 ( abreviacion );

CREATE SEQUENCE <SCHEMA>.usuario_id_seq;

CREATE TABLE <SCHEMA>.usuario (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.usuario_id_seq'),
                tipo_usuario_id INTEGER NOT NULL,
                nombre VARCHAR NOT NULL,
                apellido VARCHAR NOT NULL,
                correo_electronico VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                fecha_ultimo_acceso TIMESTAMP NOT NULL,
                CONSTRAINT usuario_id_idx PRIMARY KEY (id)
);

ALTER SEQUENCE <SCHEMA>.usuario_id_seq OWNED BY <SCHEMA>.usuario.id;


CREATE SEQUENCE <SCHEMA>.empresa_id_seq;

CREATE TABLE <SCHEMA>.empresa (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.empresa_id_seq'),
                nombre VARCHAR NOT NULL,
                rif VARCHAR NOT NULL,
                frase_comercial VARCHAR NOT NULL,
                constante_tarifa REAL NOT NULL,
                porcentaje_tarifa REAL NOT NULL,
                CONSTRAINT empresa_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE <SCHEMA>.empresa_id_seq OWNED BY <SCHEMA>.empresa.id;

CREATE INDEX nombre_empresa_idx
 ON <SCHEMA>.empresa
 ( nombre DESC );

CREATE UNIQUE INDEX rif_empresa_idx
 ON <SCHEMA>.empresa
 ( rif );

CREATE SEQUENCE <SCHEMA>.usuario_empresa_seq;

CREATE TABLE <SCHEMA>.usuario_empresa (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.usuario_empresa_seq'),
                usuario_id INTEGER NOT NULL,
                empresa_id INTEGER NOT NULL,
                CONSTRAINT usuario_empresa_id_idx PRIMARY KEY (id)
);

ALTER SEQUENCE <SCHEMA>.usuario_empresa_seq OWNED BY <SCHEMA>.usuario_empresa.id;


CREATE SEQUENCE <SCHEMA>.agencia_seq;

CREATE TABLE <SCHEMA>.agencia (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.agencia_seq'),
                empresa_id INTEGER NOT NULL,
                nombre VARCHAR NOT NULL,
                ubicacion TEXT NOT NULL,
                latitud REAL NOT NULL,
                longitud REAL NOT NULL,
                CONSTRAINT agencia_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE <SCHEMA>.agencia_seq OWNED BY <SCHEMA>.agencia.id;

CREATE UNIQUE INDEX nombre_agencia_idx
 ON <SCHEMA>.agencia
 ( nombre ASC );


CREATE SEQUENCE <SCHEMA>.agencia_paquete_seq;

CREATE TABLE <SCHEMA>.agencia_paquete (
                id INTEGER NOT NULL DEFAULT nextval('<SCHEMA>.agencia_paquete_seq'),
                tipo_estatus INTEGER NOT NULL,
                agencia_id INTEGER NOT NULL,
                paquete_id INTEGER NOT NULL,
                fecha_arribo TIMESTAMP NOT NULL,
                CONSTRAINT agencia_paquete_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE <SCHEMA>.agencia_paquete_seq OWNED BY <SCHEMA>.agencia_paquete.id;

ALTER TABLE <SCHEMA>.agencia_paquete ADD CONSTRAINT paquete_agencia_paquete_fk
FOREIGN KEY (paquete_id)
REFERENCES <SCHEMA>.paquete (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE <SCHEMA>.agencia_paquete ADD CONSTRAINT tipo_estatdo_agencia_paquete_fk
FOREIGN KEY (tipo_estatus)
REFERENCES <SCHEMA>.tipo_estado (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE <SCHEMA>.usuario ADD CONSTRAINT tipo_usuario_usuario_fk
FOREIGN KEY (tipo_usuario_id)
REFERENCES <SCHEMA>.tipo_usuario (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE <SCHEMA>.usuario_empresa ADD CONSTRAINT usuario_usuario_empresa_fk
FOREIGN KEY (usuario_id)
REFERENCES <SCHEMA>.usuario (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE <SCHEMA>.agencia ADD CONSTRAINT empresa_agencia_fk
FOREIGN KEY (empresa_id)
REFERENCES <SCHEMA>.empresa (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE <SCHEMA>.usuario_empresa ADD CONSTRAINT empresa_usuario_empresa_fk
FOREIGN KEY (empresa_id)
REFERENCES <SCHEMA>.empresa (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE <SCHEMA>.agencia_paquete ADD CONSTRAINT agencia_agencia_paquete_fk
FOREIGN KEY (agencia_id)
REFERENCES <SCHEMA>.agencia (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
