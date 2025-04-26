import { Button } from '@ui/components/Button';
export default function Index() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-8 text-secondary/50">Welcome to Blazedrop</h1>
      <div className="space-x-4 bg-auto">
        <Button variant="default" className='bg-blue-400'>Default Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline" >Outline Button</Button>
        <Button variant="secondary" >Secondary Button</Button>
        <Button variant="ghost" >Ghost Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
    </div>
  );
}
