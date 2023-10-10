import { Button } from "primereact/button";

export default function Home() {
  return (
    <main>
      <div className="space-x-3 m-3">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
      </div>
      <div className="space-x-3 m-3">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warning" severity="warning" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
      </div>
    </main>
  );
}
