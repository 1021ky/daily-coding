/**
 * アプリケーションのコマンドについて定義する
 */
import { Command } from 'commander';
const program = new Command();

export function parseCommandArgs(){
    program
    .name('Todo App')
    .description('CLI to manage your todo')
    .version('0.0.1');

    program.command("todo <name>")
    .description('manage your todo')
    .argument('<string>', 'task')
    .command('add').action((name)=>{
        console.log("add", name);
    })
    .command('add').action(()=>{
        console.log("delete");
    })

    program.parse(process.argv);
}