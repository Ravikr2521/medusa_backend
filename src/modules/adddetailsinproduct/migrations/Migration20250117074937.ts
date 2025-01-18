import { Migration } from '@mikro-orm/migrations';

export class Migration20250117074937 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "my_add_details_product" ("id" text not null, "short_des" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "my_add_details_product_pkey" primary key ("id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_my_add_details_product_deleted_at" ON "my_add_details_product" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "my_add_details_product" cascade;');
  }

}
