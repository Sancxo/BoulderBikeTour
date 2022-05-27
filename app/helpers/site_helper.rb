module SiteHelper
    # Sets a generic avatar depending on rider gender
    def rider_avatar(gender)
        case gender
        when 'M'
            'man'
        when 'F'
            'woman'
        end
    end
end
