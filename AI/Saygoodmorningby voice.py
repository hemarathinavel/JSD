import pyttsx3
import datetime

print("Module pyttsx3 accepted")

def speak(text):
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[0].id)
    engine.say("Hi... " + text)
    engine.runAndWait()
    engine.stop()

hour = datetime.datetime.now().hour
hour=int(input("Enter hour"))

if hour >= 5 and hour < 12:
    speak("Good Morning!")

elif hour >= 12 and hour < 17:
    speak("Good Afternoon!")

elif hour >= 17 and hour < 21:
    speak("Good Evening!")

else:
    speak("Good Night... Sleep well!")