class SiteController < ApplicationController
    def home
    end

    def photos
    end

    def riders
        @riders = Rider.all 
    end
end
