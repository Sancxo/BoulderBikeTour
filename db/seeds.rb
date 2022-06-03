# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

riders_list = [
    ["Dustin",      "Green",	    "M",  "Hickory Hills",	    "IL",	[40.00, -105.35]],
    ["Jason",       "Finn",	        "M",  "Huntington Beach",	"CA",	[39.95, -105.24]],
    ["Howard",	    "Thompson",	    "M",  "Hale",	            "MO",	[40.06, -105.26]],
    ["Maggie",	    "Lantz",	    "F",  "Dublin",	            "OH",	[40.03, -105.23]],
    ["Lawrence",	"Duran",	    "M",  "Fort Myers",	        "FL",	[40.04, -105.23]],
    ["Irene",	    "Molina",	    "F",  "Tucson",	            "AZ",	[39.96, -105.22]],
    ["Nancy",	    "Garner",	    "F",  "Baltimore",	        "MD",	[39.98, -105.21]],
    ["Tara",        "Taylor",	    "F",  "Minneapolis",	    "MN",	[40.00, -105.25]],
    ["Alejandro",   "Smith",	    "M",  "Scarborough",	    "ME",	[40.02, -105.26]],
    ["Tricia",	    "Renshaw",	    "F",  "Mystic",	            "CT",	[40.02, -105.30]],
    ["Travis",	    "Cook",	        "M",  "Twin Lakes",	        "WI",	[40.01, -105.20]],
    ["Joan",	    "Brooks",	    "F",  "Norfolk",	        "VA",	[39.98, -105.24]],
    ["Joseph",	    "Rodgers",	    "M",  "Wayne",	            "NJ",	[39.99, -105.25]],
    ["Matthew",	    "Gregson",	    "M",  "Brashear",	        "MO",	[40.01, -105.29]],
    ["Katie",	    "Dunlap",	    "F",  "Marion",	            "VA",	[39.97, -105.27]],
    ["Leo",	        "Howard",	    "M",  "Dallas",	            "TX",	[39.97, -105.33]],
    ["Maria",	    "Baisden",	    "F",  "Raleigh",	        "NC",	[40.00, -105.29]],
    ["Sandy",	    "Townsend",     "F",  "Newport",	        "PA",	[40.05, -105.30]],
    ["Melinda",	    "Stephenson",   "F",  "Kahului",	        "HI",	[39.99, -105.31]],
    ["Jason",	    "Nichols",	    "M",  "Alexandria",	        "VA",	[40.01, -105.32]]
]

riders_list.each do |first_name, last_name, gender, city, state, lat_long|
    Rider.create(first_name: first_name, last_name: last_name, gender: gender, city: city, state: state, lat_long: lat_long)
end