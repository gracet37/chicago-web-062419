class Donut < ApplicationRecord
  validates :flavor, presence: true, format: { with: /[a-zA-Z]/}
  validates :price, presence: true, numericality: {only_integer: true}
  validates :sprinkles, inclusion: [true, false]
  validate :validate_price_range

  def validate_price_range
    if self.price
      if self.price >= 10 || self.price <= 1
        self.errors.add(:price, message: "Cannot be less than 1 or more than 10")
      end
    end
  end
end
