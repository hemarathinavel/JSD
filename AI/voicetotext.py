
import speech_recognition as sr
print("module ok")

r=sr.Recognizer()
with sr.Microphone()as source:
    print("Listening...")
    audio=r.record(source,duration=4)
    print("Recognizing...")
    try:
        query=r.recognize_google(audio,language="en-IN")
        print("User said:",query)
    except sr.UnknownValueError:
        print("Could not understand the audio")
    except sr.RequestError as e:
        print("Recogniton service error:",e)
          
