require 'openssl'

def self_sign
    data = 'hello world!'
    ec = OpenSSL::PKey::EC.generate('secp256k1')
    signature = ec.sign('SHA256', data)
    result = ec.verify('SHA256', signature, data)
    p result
end

if __FILE__ == $0
    self_sign
end