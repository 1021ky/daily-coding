class ZipCodeRequest
  include ActiveModel::Model

  InvalidRequestError = Class.new(StandardError)

  attr_accessor :zip_code

  validates :zip_code, presence: true, format: { with: /\A\d{7}\z/ }

  def self.from(params)
    new(zip_code: params.require(:zip_code))
  rescue ActionController::ParameterMissing
    new
  end

  def verify!
    return zip_code if valid?

    raise InvalidRequestError, "郵便番号の指定に誤りがあります"
  end

  def zip_code=(value)
    @zip_code = value.presence&.to_s
  end
end
