import { Migration } from '@mikro-orm/migrations';

export class Migration20250110080752 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table if exists "my_custom" drop constraint if exists "my_custom_favColor_check";');

    this.addSql('alter table if exists "my_custom" alter column "name" type text using ("name"::text);');
    this.addSql('alter table if exists "my_custom" alter column "name" drop not null;');
    this.addSql('alter table if exists "my_custom" alter column "age" type integer using ("age"::integer);');
    this.addSql('alter table if exists "my_custom" alter column "age" drop not null;');
    this.addSql('alter table if exists "my_custom" alter column "email" type text using ("email"::text);');
    this.addSql('alter table if exists "my_custom" alter column "email" drop not null;');
    this.addSql('alter table if exists "my_custom" alter column "hasAccount" type boolean using ("hasAccount"::boolean);');
    this.addSql('alter table if exists "my_custom" alter column "hasAccount" set default true;');
    this.addSql('alter table if exists "my_custom" alter column "date_of_birth" type timestamptz using ("date_of_birth"::timestamptz);');
    this.addSql('alter table if exists "my_custom" alter column "date_of_birth" drop not null;');
    this.addSql('alter table if exists "my_custom" alter column "favColor" type text using ("favColor"::text);');
    this.addSql('alter table if exists "my_custom" add constraint "my_custom_favColor_check" check ("favColor" in (\'black\', \'white\'));');
    this.addSql('alter table if exists "my_custom" alter column "favColor" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table if exists "my_custom" drop constraint if exists "my_custom_favColor_check";');

    this.addSql('alter table if exists "my_custom" alter column "name" type text using ("name"::text);');
    this.addSql('alter table if exists "my_custom" alter column "name" set not null;');
    this.addSql('alter table if exists "my_custom" alter column "age" type integer using ("age"::integer);');
    this.addSql('alter table if exists "my_custom" alter column "age" set not null;');
    this.addSql('alter table if exists "my_custom" alter column "email" type text using ("email"::text);');
    this.addSql('alter table if exists "my_custom" alter column "email" set not null;');
    this.addSql('alter table if exists "my_custom" alter column "date_of_birth" type timestamptz using ("date_of_birth"::timestamptz);');
    this.addSql('alter table if exists "my_custom" alter column "date_of_birth" set not null;');
    this.addSql('alter table if exists "my_custom" alter column "favColor" type text using ("favColor"::text);');
    this.addSql('alter table if exists "my_custom" add constraint "my_custom_favColor_check" check ("favColor" in (\'black\', \'white\'));');
    this.addSql('alter table if exists "my_custom" alter column "favColor" set not null;');
  }

}
