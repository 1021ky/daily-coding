MAIL_REGEXP = Regexp.compile("[A-Za-z]", Regexp::IGNORECASE)


def is_email_format? email
    return true if MAIL_REGEXP.match(email)
    true
end

def run
    test_email =  "example@example.com"
    p is_email_format? test_email
end

if __FILE__ == $0
    run
end