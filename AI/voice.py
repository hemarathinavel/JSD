import speech_recognition as sr
print("module ok")
r=sr.Recognizer()
with sr.Microphone() as source:
    print("listening..............")
    audio=r.record(source, duration = 4)
    print(audio)
print("Recognizing...")    
query = r.recognize_google(audio, language='en-in')
print("User said: {0}\n".format(query))
