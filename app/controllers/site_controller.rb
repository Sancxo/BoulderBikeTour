class SiteController < ApplicationController
    def home
    end

    def photos
    end

    def riders
        @riders = Rider.all 
    end

    def locations
        @riders = Rider.all
    end

    def contest
        @submission = Submission.new
    end

    def submit
        @submission = Submission.new(submission_params)
        respond_to do |format|
            if @submission.save
              format.html { redirect_to submissions_url, notice: "Submission was successfully sent." }
            #   format.json { render :show, status: :created, location: @submission }
            else
              format.html { render :contest, status: :unprocessable_entity }
              format.json { render json: @submission.errors, status: :unprocessable_entity }
            end
          end
    end

    def submission_params
      params.require(:submission).permit(:first_name, :last_name, :email, :email_confirmation, :slogan)
    end
end
