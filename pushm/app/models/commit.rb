class Commit < ApplicationRecord
  belongs_to :author
  validates :message, presence: :true
  validates :branch_name, uniqueness: true

  def author_name
    self.author.name
  end
end
