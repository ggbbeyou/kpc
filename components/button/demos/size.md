---
title: 按钮尺寸
order: 4
---

通过`size`属性可以指定按钮的尺寸：`large`, `default`,`small`, `mini`。

```vdt
import Button from 'kpc/components/button';

<div>
    <Button size="large">large</Button>
    <Button>default</Button>
    <Button size="small">small</Button>
    <Button size="mini">mini</Button>
    <br /><br />
    <Button icon circle size="large"><i class="k-icon ion-ios-search"></i></Button>
    <Button icon circle><i class="k-icon ion-ios-search"></i></Button>
    <Button icon circle size="small"><i class="k-icon ion-ios-search"></i></Button>
    <Button icon circle size="mini"><i class="k-icon ion-ios-search"></i></Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```