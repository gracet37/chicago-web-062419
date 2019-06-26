# bank_account = {"user_id": 3, "balance": 100}
require 'pry'
class Account
  attr_reader :account_number, :customer_id
  attr_accessor :balance
  # How will I initialize this?
  # What information does this object need to hold?
  # i.e. what instance variables do I need?

  def self.say_hello
    puts "GREETINGS FROM YOUR BANK, HUMAN"
    created_accounts
  end

  def self.created_accounts
    puts "ILLUSTRIOUS HUMANS HAVE CREATED #{@@created_accounts} ACCOUNTS THUS FAR IN THEIR HISTORY"
  end

  def initialize(args)
    # Class variable, scoped to the Account class
    @@created_accounts ||= 0
    @@created_accounts += 1
    # Instance variables, scoped to instances of Account
    @balance = args[:balance]
    @account_number = args[:account_number].to_s
    @customer_id = args[:customer_id]
    puts self
  end

  # def balance
  #   @balance
  # end

  # def balance=(new_balance)
  #   @balance = new_balance
  # end

  def print_balance
    puts self.balance
  end

  def deposit(value)
    self.balance = balance + value
  end

  def withdraw(value)
    raise "ERROR - INSUFFICIENT FUNDS" if value > balance
    self.balance = balance - value
  end
end

# my_acct = Account.new(1000000, "956217", "J963852525")

# my_acct.print_balance
# Account.say_hello

bank_account_info = { balance: 100, account_number: "44444", customer_id: "A23456" }
my_acct = Account.new(bank_account_info)
my_acct.withdraw(99)
my_acct.print_balance
