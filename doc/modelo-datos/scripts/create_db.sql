
CREATE SEQUENCE public.paquete_id_seq;

CREATE TABLE public.paquete (
                id INTEGER NOT NULL DEFAULT nextval('public.paquete_id_seq'),
                ancho REAL NOT NULL,
                alto REAL NOT NULL,
                peso REAL NOT NULL,
                descripcion TEXT NOT NULL,
                numero_guia VARCHAR NOT NULL,
                costo REAL NOT NULL,
                CONSTRAINT paquete_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE public.paquete_id_seq OWNED BY public.paquete.id;

CREATE UNIQUE INDEX numero_guia_paquete_idx
 ON public.paquete
 ( numero_guia );

CREATE SEQUENCE public.tipo_estatdo_id_seq;

CREATE TABLE public.tipo_estatdo (
                id INTEGER NOT NULL DEFAULT nextval('public.tipo_estatdo_id_seq'),
                nombre VARCHAR NOT NULL,
                abreviacion VARCHAR NOT NULL,
                CONSTRAINT tipo_estado_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE public.tipo_estatdo_id_seq OWNED BY public.tipo_estatdo.id;

CREATE SEQUENCE public.tipo_usuario_id_seq;

CREATE TABLE public.tipo_usuario (
                id INTEGER NOT NULL DEFAULT nextval('public.tipo_usuario_id_seq'),
                nombre VARCHAR NOT NULL,
                abreviacion VARCHAR NOT NULL,
                CONSTRAINT tipousuario_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE public.tipo_usuario_id_seq OWNED BY public.tipo_usuario.id;

CREATE UNIQUE INDEX abreviacion_tipousuario_idx
 ON public.tipo_usuario
 ( abreviacion );

CREATE TABLE public.usuario (
                id INTEGER NOT NULL,
                tipousuario_id INTEGER NOT NULL,
                nombre VARCHAR NOT NULL,
                apellido VARCHAR NOT NULL,
                correo_electronico VARCHAR NOT NULL,
                password VARCHAR NOT NULL,
                fecha_ultimo_acceso TIMESTAMP NOT NULL,
                CONSTRAINT usuario_id_idx PRIMARY KEY (id)
);


CREATE SEQUENCE public.empresa_id_seq;

CREATE TABLE public.empresa (
                id INTEGER NOT NULL DEFAULT nextval('public.empresa_id_seq'),
                nombre VARCHAR NOT NULL,
                rif VARCHAR NOT NULL,
                frase_comercial VARCHAR NOT NULL,
                constante_tarifa REAL NOT NULL,
                porcentaje_tarifa REAL NOT NULL,
                CONSTRAINT empresa_id_idx PRIMARY KEY (id)
);


ALTER SEQUENCE public.empresa_id_seq OWNED BY public.empresa.id;

CREATE INDEX nombre_empresa_idx
 ON public.empresa
 ( nombre DESC );

CREATE UNIQUE INDEX rif_empresa_idx
 ON public.empresa
 ( rif );

CREATE TABLE public.usuario_empresa (
                id INTEGER NOT NULL,
                usuario_id INTEGER NOT NULL,
                empresa_id INTEGER NOT NULL,
                CONSTRAINT usuario_empresa_id_idx PRIMARY KEY (id)
);


CREATE TABLE public.agencia (
                id INTEGER NOT NULL,
                empresa_id INTEGER NOT NULL,
                nombre VARCHAR NOT NULL,
                ubicacion TEXT NOT NULL,
                latitud REAL NOT NULL,
                longitud REAL NOT NULL,
                CONSTRAINT agencia_id_idx PRIMARY KEY (id)
);


CREATE UNIQUE INDEX nombre_agencia_idx
 ON public.agencia
 ( nombre ASC );

CREATE TABLE public.agencia_paquete (
                id INTEGER NOT NULL,
                tipo_estatus INTEGER NOT NULL,
                agencia_id INTEGER NOT NULL,
                paquete_id INTEGER NOT NULL,
                fecha_arribo TIMESTAMP NOT NULL,
                CONSTRAINT agencia_paquete_id_idx PRIMARY KEY (id)
);


ALTER TABLE public.agencia_paquete ADD CONSTRAINT paquete_agencia_paquete_fk
FOREIGN KEY (paquete_id)
REFERENCES public.paquete (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.agencia_paquete ADD CONSTRAINT tipo_estatdo_agencia_paquete_fk
FOREIGN KEY (tipo_estatus)
REFERENCES public.tipo_estatdo (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.usuario ADD CONSTRAINT tipo_usuario_usuario_fk
FOREIGN KEY (tipousuario_id)
REFERENCES public.tipo_usuario (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.usuario_empresa ADD CONSTRAINT usuario_usuario_empresa_fk
FOREIGN KEY (usuario_id)
REFERENCES public.usuario (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.agencia ADD CONSTRAINT empresa_agencia_fk
FOREIGN KEY (empresa_id)
REFERENCES public.empresa (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.usuario_empresa ADD CONSTRAINT empresa_usuario_empresa_fk
FOREIGN KEY (empresa_id)
REFERENCES public.empresa (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.agencia_paquete ADD CONSTRAINT agencia_agencia_paquete_fk
FOREIGN KEY (agencia_id)
REFERENCES public.agencia (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
