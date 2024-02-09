def sort(param):
    return bubble_sort(param)
    return []


def bubble_sort(param):
    for outer_index in range(len(param)):
        for inner_index in range(len(param) - outer_index - 1):
            if param[inner_index] > param[inner_index + 1]:
                param[inner_index], param[inner_index + 1] = (
                    param[inner_index + 1],
                    param[inner_index],
                )
    return param
