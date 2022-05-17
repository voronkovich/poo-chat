CREATE TABLE IF NOT EXISTS public.messages
(
    id bigint NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    created_at timestamp with time zone DEFAULT now(),
    user_id uuid,
    content character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT messages_pkey PRIMARY KEY (id),
    CONSTRAINT messages_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.messages
    OWNER to postgres;

GRANT ALL ON TABLE public.messages TO authenticated;

GRANT ALL ON TABLE public.messages TO postgres;

GRANT ALL ON TABLE public.messages TO service_role;

ALTER TABLE IF EXISTS public.messages
    ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable select access for authenticated users only"
    ON public.messages
    AS PERMISSIVE
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Enable insert for authenticated users only"
    ON public.messages
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK (true);