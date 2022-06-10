class Submission < ApplicationRecord
    EMAIL_FORMAT = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, 
        presence: true, 
        confirmation: {case_sensitive: false}, 
        format: {with: EMAIL_FORMAT, 
        message: "Your email address should respect the correct email address format."}
    validates :email_confirmation, presence: true
    validates :slogan, presence: true, length: {in: 2..50}

    before_save {self.email = email.downcase}
end