var library = (function() {

	function doubleDigit(value) {
		if (value.length === 1) {
			value = '0' + value;
		}
	return value;
}

  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var d = new Date();
			return String(Math.floor(d.getTime() / 1000));
		},
		UnixMillisecond: function(){
			var d = new Date();
			return String(d.getTime());
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
						var d = new Date();
						var hrs = d.getHours() % 12 || 12;
						var m = d.getMinutes();
						var s = d.getSeconds();

						if (m < 10) {
							var mins = String("0" + m);
						} else {
							var mins = String(m);
						}

						if (s < 10) {
							var secs = String("0" + s);
						} else {
							var secs = String(s);
						}

						if (d.getHours() < 12) {
							var afternoon = "AM"
						} else {
							var afternoon = "PM"
						}
						
						return String(hrs + ":" + mins + ":" + secs + " " + afternoon);
					},
	   	    WithOutSeconds: function(){
						var d = new Date();
						var hrs = d.getHours() % 12 || 12;
						var m = d.getMinutes();

						if (m < 10) {
							var mins = String("0" + m);
						} else {
							var mins = String(m);
						}

						if (d.getHours() < 12) {
							var afternoon = "AM"
						} else {
							var afternoon = "PM"
						}

						return String(hrs + ":" + mins + " " + afternoon);
					}
		 	 }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
					var d = new Date();
					var m = d.getMonth();
					var day = d.getDate();
					var y = d.getFullYear();

					return String((m + 1) + "/" + day + "/" + y); 
				},
			Name: function(){
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var d = new Date();
				var m = d.getMonth();
				var day = d.getDate();
				var y = d.getFullYear();

				return String(months[m] + " " + day + ", " + y);
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				var d = new Date();
				var sec = d.getSeconds();
				return String(sec);
			},
			DblDigit: function(){
				var d = new Date();
				var sec = d.getSeconds();
				if (sec < 10) {
					return String("0" + sec);
				} else {
					return String(sec);
				}
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				var d = new Date();
				var min = d.getMinutes();
				return String(min);
			},
			DblDigit: function(){
				var d = new Date();
				var min = d.getMinutes();
				if (min < 10) {
					return String("0" + min);
				} else {
					return String(min);
				}
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				var d = new Date();
				var hrs = d.getHours();
				return String(hrs);
			},
			TwelveHour: function() {
				var d = new Date();
				var hrs = d.getHours() % 12 || 12;
				return String(hrs);
			},
			AMPM: (function() {
				var d = new Date();
				var hrs = d.getHours();
				if (hrs < 12) {
					var afternoon = "am"
				} else {
					var afternoon = "pm"
				}
				return {
					UpperCase: function(){
						return String(afternoon.toUpperCase());
					},
					LowerCase: function(){
						return String(afternoon);
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var fl = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				var d = new Date();
				var dayOfWeek = d.getDay();
				return String(fl[dayOfWeek]);
			},
			AbrDayOfWeek: function(){
				var fl = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
				var d = new Date();
				var dayOfWeek = d.getDay();
				return String(fl[dayOfWeek]);
			},
			FirstTwoOfWeek: function(){
				var fl = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
				var d = new Date();
				var dayOfWeek = d.getDay();
				return String(fl[dayOfWeek]);
			},
			WeekOfYear: function(){
				var d = new Date();
				var thisYear = d.getFullYear();
        var thisMonth = d.getMonth();
        var thisDay = d.getDate();
		// Do not use if the year = 1900.
        var daysInMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        var today = (daysInMonth[thisMonth] + thisDay);
						if (thisMonth >= 3 && thisYear % 4 === 0) {
							today++;
						} 
				//Compensate for the first week offset. (Note: 2017 starts on a Sunday)
				var i = (thisYear - 2017);
				var j = (i % 7) + today;
				var wOY = Math.ceil(j / 7);
				return String(wOY);
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var d = new Date();
						var day = d.getDate();
						return String(day);
					},
					Ordinal: function(){
						var d = new Date();
						var day = d.getDate();
						if (day === 1) {
							return String(day + "st");
						} else if (day === 2) {
							return String(day + "nd");
						} else if (day === 3) {
							return String(day + "rd");
						} else {
							return String (day + "th");
						}
					},
					DateDblDigit: function(){
						var d = new Date();
						var day = d.getDate();
						if (day < 10) {
							return String("0" + day);
						} else {
							return String(day);
						}
					}
				}
			})(),
			MonthNumber: function(){
				var d = new Date();
				// return '' + (d.getMonth() + 1);
				return String(d.getMonth() + 1);
			},
			MonthNumberDblDigit: function(){
				var d = new Date();
				if (d.getMonth() < 9) {
					return String('0' + (d.getMonth() + 1));
				} else {
					return String(d.getMonth() + 1);
				}
			},
			AbrOfCurrentMonth: function(){
				var abbrev = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
				var d = new Date();
				var m = d.getMonth();
				return abbrev[m];
			},
			CurrentMonth: function(){
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var d = new Date();
				var m = d.getMonth();
				return months[m];
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var d = new Date();
						var thisYear = d.getFullYear();
            var thisMonth = d.getMonth();
            var thisDay = d.getDate();
            var daysInMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          	var today = (daysInMonth[thisMonth] + thisDay);
						if (thisMonth >= 3 && thisYear % 4 === 0) {
							today++;
							return String(today);
						} else {
							return String(today);
						};
					},
					Ordinal: function(){
						function getSuffix(i) {
							var j = i % 10,
									k = i % 100;
							if (j == 1 && k != 11) {
									return String(i + "st");
							}
							if (j == 2 && k != 12) {
									return String(i + "nd");
							}
							if (j == 3 && k != 13) {
									return String(i + "rd");
							} else {
							return String(i + "th");
						}
					};
						
						var d = new Date();
						var thisYear = d.getFullYear();
            var thisMonth = d.getMonth();
            var thisDay = d.getDate();
            var daysInMonth = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          	var today = (daysInMonth[thisMonth] + thisDay);
						if (thisMonth >= 3 && thisYear % 4 === 0) {
							today++;
						} 
						return getSuffix(today);
					}	
				}
			})(),
			YearFull: function(){
				var d = new Date();
				var year = d.getFullYear();
				return String(year);
			},
			YearAbr: function(){
				var d = new Date();
				var y = d.getFullYear();
				var year = String(y).split('');
				return String(year[2] + year[3]);

				//also:
				// var year = this.YearFull();
				// return year.substr(-2);
			}
		}
	})(),
	Defaults: function(){
		var d = new Date();
		var month = function thisMonth() {
			if (d.getMonth() < 10) {
				return String("0" + (d.getMonth() + 1));
			} else {
				return String(d.getMonth() + 1);
			}
		};

		var hours = function thisHour() {
			if (d.getHours() < 10) {
				return String("0" + (d.getHours()));
			} else {
				return String(d.getHours());
			}
		};

		var minutes = function thisMinute() {
			if (d.getMinutes() < 10) {
				return String("0" + (d.getMinutes()));
			} else {
				return String(d.getMinutes());
			}
		};

		var seconds = function thisSecond() {
			if (d.getSeconds() < 10) {
				return String("0" + (d.getSeconds()));
			} else {
				return String(d.getSeconds());
			}
		};
		return String(d.getFullYear() + "-" + month() + "-" + d.getDate() + "T" + hours() + ":" + minutes() + ":" + seconds());
	}
  }
})();