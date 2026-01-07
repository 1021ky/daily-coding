require "test_helper"

class ProductTest < ActiveSupport::TestCase
  include ActionMailer::TestHelper

  test "sends email notifications when back in stock" do
    product = products(:tshirt)

    # Arrange
    # Set product out of stock
    product.update(inventory_count: 0)

    # Action Assert
    assert_emails 2 do
      product.update(inventory_count: 99)
    end
  end
end
