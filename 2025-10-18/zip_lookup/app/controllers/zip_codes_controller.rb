class ZipCodesController < ApplicationController
  def show
    request = ZipCodeRequest.from(params)
    code = request.verify!
    zip_code = ZipCode.includes(:zip_code_address, :zip_code_address_furigana).find_by(zipcode: code)
    return head :not_found unless zip_code

    render json: ZipCodeSerializer.new(zip_code).serializable_hash
  rescue ZipCodeRequest::InvalidRequestError => e
    render json: { message: e.message }, status: :bad_request
  end
end
