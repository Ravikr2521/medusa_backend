import { Migration } from '@mikro-orm/migrations';

export class Migration20250109115808 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "my_custom" ("id" text not null, "name" text not null, "age" integer not null, "email" text not null, "hasAccount" boolean not null, "date_of_birth" timestamptz not null, "favColor" text check ("favColor" in (\'black\', \'white\')) not null default \'black\', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "my_custom_pkey" primary key ("id"));');
    this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_my_custom_email_unique" ON "my_custom" (email) WHERE deleted_at IS NULL;');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_my_custom_deleted_at" ON "my_custom" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "my_custom" cascade;');
  }

}
