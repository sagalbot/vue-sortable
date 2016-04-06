<template>
    <div class="row">
        <div class="col-md-4">
            <ul class="list-group" v-sortable="{ handle: '.handle' }">
                <li class="list-group-item">Foo <i class="handle"></i></li>
                <li class="list-group-item">Bar <i class="handle"></i></li>
                <li class="list-group-item">Baz <i class="handle"></i></li>
            </ul>
        </div>
        <div class="col-md-8">
<pre v-pre><code class="language-markup">&#x3C;ul class=&#x22;list-group&#x22; v-sortable="{ handle: '.handle' }"&#x3E;
    &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Foo &#x3C;i class=&#x22;handle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/li&#x3E;
    &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Bar &#x3C;i class=&#x22;handle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/li&#x3E;
    &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Baz &#x3C;i class=&#x22;handle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;</code></pre>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    pre {
        /*padding: 0;*/
        margin: 0;
    }
</style>