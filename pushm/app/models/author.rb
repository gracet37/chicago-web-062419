class Author < ApplicationRecord
  has_many :commits, dependent: :destroy
  validates :name, presence: true

  def has_commits?
    self.commits.any?
  end
end
