# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

riders_list = [
    ["Dustin",      "Green",	    "M",  "Hickory Hills",	    "IL",	{lat: 40.00, lng: -105.35}],
    ["Jason",       "Finn",	        "M",  "Huntington Beach",	"CA",	{lat: 39.95, lng: -105.24}],
    ["Howard",	    "Thompson",	    "M",  "Hale",	            "MO",	{lat: 40.06, lng: -105.26}],
    ["Maggie",	    "Lantz",	    "F",  "Dublin",	            "OH",	{lat: 40.03, lng: -105.23}],
    ["Lawrence",	"Duran",	    "M",  "Fort Myers",	        "FL",	{lat: 40.04, lng: -105.23}],
    ["Irene",	    "Molina",	    "F",  "Tucson",	            "AZ",	{lat: 39.96, lng: -105.22}],
    ["Nancy",	    "Garner",	    "F",  "Baltimore",	        "MD",	{lat: 39.98, lng: -105.21}],
    ["Tara",        "Taylor",	    "F",  "Minneapolis",	    "MN",	{lat: 40.00, lng: -105.25}],
    ["Alejandro",   "Smith",	    "M",  "Scarborough",	    "ME",	{lat: 40.02, lng: -105.26}],
    ["Tricia",	    "Renshaw",	    "F",  "Mystic",	            "CT",	{lat: 40.02, lng: -105.30}],
    ["Travis",	    "Cook",	        "M",  "Twin Lakes",	        "WI",	{lat: 40.01, lng: -105.20}],
    ["Joan",	    "Brooks",	    "F",  "Norfolk",	        "VA",	{lat: 39.98, lng: -105.24}],
    ["Joseph",	    "Rodgers",	    "M",  "Wayne",	            "NJ",	{lat: 39.99, lng: -105.25}],
    ["Matthew",	    "Gregson",	    "M",  "Brashear",	        "MO",	{lat: 40.01, lng: -105.29}],
    ["Katie",	    "Dunlap",	    "F",  "Marion",	            "VA",	{lat: 39.97, lng: -105.27}],
    ["Leo",	        "Howard",	    "M",  "Dallas",	            "TX",	{lat: 39.97, lng: -105.33}],
    ["Maria",	    "Baisden",	    "F",  "Raleigh",	        "NC",	{lat: 40.00, lng: -105.29}],
    ["Sandy",	    "Townsend",     "F",  "Newport",	        "PA",	{lat: 40.05, lng: -105.30}],
    ["Melinda",	    "Stephenson",   "F",  "Kahului",	        "HI",	{lat: 39.99, lng: -105.31}],
    ["Jason",	    "Nichols",	    "M",  "Alexandria",	        "VA",	{lat: 40.01, lng: -105.32}]
]

riders_list.each do |first_name, last_name, gender, city, state, lat_long|
    Rider.create(first_name: first_name, last_name: last_name, gender: gender, city: city, state: state, lat_long: lat_long)
end