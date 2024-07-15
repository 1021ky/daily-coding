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

    program.command("todo")
    .description('manage your todo')
    .argument('<string>', 'task')
    .command('add').action(()=>{
        console.log("add");
    })
    .command('add').action(()=>{
        console.log("delete");
    })

    program.parse(process.argv);
}