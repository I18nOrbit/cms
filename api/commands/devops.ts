import { BaseCommand } from "@adonisjs/core/ace";
import type { CommandOptions } from "@adonisjs/core/types/ace";
import { execSync } from "child_process";

export default class Devops extends BaseCommand {
  static commandName = "devops";
  static description = "Run migrations and seeders.";

  static options: CommandOptions = {};

  async run() {
    this.logger.info("[DEVOPS] Running devops command...");

    // run node ace migrationt:run
    execSync("node ace migration:run --force", { stdio: "inherit" });

    // run node ace db:seed
    execSync("node ace db:seed", { stdio: "inherit" });

    this.logger.success("[DEVOPS] Devops command completed.");
  }
}
