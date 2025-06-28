import React, { useEffect } from "react";

const GoogleTranslateWidget: React.FC = () => {
  useEffect(() => {
 
    if (!document.querySelector("#google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      addScript.id = "google-translate-script";
      document.body.appendChild(addScript);
    }


    (window as any).googleTranslateElementInit = () => {
      if (!(window as any)._google_translate_widget_initialized) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,te,ta,pa,bn,ml,gu,kn,or",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
        (window as any)._google_translate_widget_initialized = true;
      }
    };
  }, []);

  return <div id="google_translate_element" className="text-end p-2" />;
};

export default GoogleTranslateWidget;

