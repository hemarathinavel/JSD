import pyttsx3
print("module pyttsx3 accepted")
engine=pyttsx3.init('sapi5')
voices=engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)
data=input("Enter your text")
for _ in range(5):
    engine.say("hello i am" +data)
engine.runAndWait()
