import React from "react";
import { Link } from "../Link";
import { MinorText } from "../Entry/MinorText";

type FooterProps = {
  className?: string;
};

export function Footer({ className = "" }: FooterProps): JSX.Element {
  return (
    <MinorText component="p" className={`text-sm ${className}`}>
      Diese Seite bietet eine Aufbereitung des{" "}
      <Link
        href="https://www.wadoku.de/downloads/xml-export/https://www.wadoku.de/downloads/xml-export/"
        target="_blank"
        rel="noreferrer"
      >
        Exports
      </Link>{" "}
      von{" "}
      <Link href="https://wadoku.de" target="_blank" rel="noreferrer">
        wadoku.de
      </Link>
      . Die Einträge unterliegen den existierenden{" "}
      <Link
        href="https://www.wadoku.de/wiki/display/WAD/Wadoku.de-Daten+Lizenz"
        target="_blank"
        rel="noreferrer"
      >
        Lizenzbedingungen
      </Link>
      .
    </MinorText>
  );
}
