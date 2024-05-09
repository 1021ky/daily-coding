from counter import create_counter, CounterType
from command_line_interface import CommandLineInterface

cli = CommandLineInterface()
filepath, option = cli.get_input()
# TODO cliで受け取った値をCounterTypeに変換が必要

create_counter(
    CounterType.Word,
)
