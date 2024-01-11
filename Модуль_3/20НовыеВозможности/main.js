const a = undefined;
const b = null;

c = a ?? b;

 console.log(c);

 let user;

 console.log(user ?? "Аноним");

 let height = null;
 let width = null;

 let area = (height ?? 100) * (width ?? 50);

 console.log(area);

 let admin = null;

 admin ??= 18;

 console.log(admin)

 height = height ?? 100;
