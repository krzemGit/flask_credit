# checking Lunh's algorithm
def check_sum(my_input):
    card_no = []
    for i in my_input:
        card_no.append(int(i))
    double_sum = 0
    single_sum = 0
    final_sum = 0
    for i in card_no[-2:: -2]:
        add_double = i*2
        if add_double > 9:
            add_double -= 10
            double_sum += 1
            double_sum += add_double
        else:
            double_sum += add_double
    for j in card_no[-1:: -2]:
        single_sum += j
    final_sum = single_sum + double_sum
    if final_sum % 10 == 0:
        return 1
    else:
        return 0


# check wich card is this
def check_card(my_input, test_res):
    if test_res == 1:
        if (len(my_input) == 16 or len(my_input) == 13) and my_input[0] == '4':
            return "Visa", 1
        elif len(my_input) == 16 and int(my_input[0: 2]) in range(51, 56):
            return "MasterCard", 1
        elif len(my_input) == 15 and int(my_input[0: 2]) in (34, 37):
            return "American Express", 1
    else:
        return ["unknown card", 0]